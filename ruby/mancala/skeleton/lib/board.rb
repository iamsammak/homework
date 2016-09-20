class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup, idx|
      next if idx == 6 || idx == 13
      4.times do
        cup << :stone
      end
    end
  end

  def valid_move?(start_pos)
    #how do I break out of the terminal, before finishing the game
    # or closing the terminal
    # if start_pos == "exit"
    #   exit
    # end

    if start_pos < 0 || start_pos > 12
      raise "Nope, invalid starting cup"
    end

    #can't start on an empty cup
    if @cups[start_pos].empty?
      raise "Tis an empty cup...invalid starting cup"
    end
  end

  def make_move(start_pos, current_player_name)
    #pick up the stones
    stones = @cups[start_pos]
    #stones are picked up, so empty cup @ start_pos
    @cups[start_pos] = []

    #disturb the stones as you move along
    cup_idx = start_pos
    until stones.empty?
      cup_idx += 1
      # jump back to idx 0 if cup_idx goes beyond 13
      cup_idx = 0 if cup_idx > 13
      if cup_idx == 6
        @cups[6] << stones.pop if current_player_name == @name1
        # stones won't pop if the current_player_name doesn't match
      elsif cup_idx == 13
        @cups[13] << stones.pop if current_player_name == @name2
      else
        @cups[cup_idx] << stones.pop
      end
    end

    render
    next_turn(cup_idx) #the cup_idx the last stone was placed in
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    if ending_cup_idx == 6 || ending_cup_idx == 13
      #would only end here if its that players :store
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      #ended on empty cup, so turn ended, switch players
      :switch
    else
      #ended on a cup with stones inside
      ending_cup_idx
      #how does returning this run make_move again
      #in mancala.rb
      #if move_result isn't switch or prompt
      #then
      #move_result = @board.make_move(move_result, current_player.name)
      #therefore running make move again
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def cups_empty?
    @cups.take(6).all? { |cup| cup.empty? } ||
    @cups[7..12].all? { |cup| cup.empty? }
  end

  def winner
    player1_count, player2_count = @cups[6].count, @cups[13].count

    if player1_count == player2_count
      :draw
    else
      player1_count > player2_count ? @name1 : @name2
    end
  end

end
