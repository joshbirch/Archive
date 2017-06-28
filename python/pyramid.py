class Pyramid(object):
    def __init__(self,height):
        self.height = int(height)
        self.cubeNumbers= [1, 3, 5, 7, 9, 11, 13, 15]
        self.initLength = self.cubeNumbers[self.height]



    def draw(self):
        for i in range(0,self.height):
            print(" "*self.initLength,"*"*self.cubeNumbers[i])
            self.initLength -= 1


class Square(object):
    def __init__(self,length):
        self.length = length

    def draw(self):
        for i in range(0,self.length):
            print("*"*(self.length*2))

x = Pyramid(6)
x.draw()
