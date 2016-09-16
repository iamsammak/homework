#homework w1d4
#abstract data types

class Stack
  def initialize
    # create ivar to store stack here!
    @stack = []
  end

  def add(el)
    # adds an element to the stack
    @stack << el
    el #returns element added
  end

  def remove
    # removes one element from the stack
    @stack.pop
  end

  def show
    # return a COPY of the stack
    @stack.dup
  end
end

#write a Queue class.
#We will need the following instance methods:
#enqueue(el), dequeue, and show

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.unshift(el) #OR @queue << el
    el #returns element added
  end

  def dequeue
    @queue.pop #OR @queue.shift
  end

  def show #are we returning a copy just like the Stack class?
    @queue.dup
  end
end


#my_map = [[k1, v1], [k2, v2], [k3, v2], ...]
class Map
  def initialize
    @map = []
  end
  #assign method can be used to either
  #create a new key-value pair
  #or update the value for a pre-existing key
  #iterate through map looking for the index
  #of the pair whose key == incoming key
  def assign(key, value)
    pair_idx = @map.index { |pair| pair[0] == key}
    if pair_idx.nil?
      @map << [key, value]
    else
      @map[pair_idx][1] = value
    end
    #refractored
    # pair_idx ? @map[pair_idx][1] = value : @map << [key, value]
    [key, value]
  end

  def lookup(key) #returns value of key that is being looked up
    @map.each { |pair| return pair[1] if pair[0] == key }
  end

  def remove(key)
    @map.reject! { |pair| pair[0] == key }
    nil
  end

  def show
    @map.dup
  end
end
