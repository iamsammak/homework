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
