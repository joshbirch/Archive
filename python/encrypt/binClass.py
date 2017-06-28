class binClass(object):
    def __init__(self,in1,in2):
        self.bin2 = bin(in2)
        self.bin1 = bin(in1)


    def printVals(self):
        print(self.bin1)
        print(self.bin2)


    def addBin(self):
        if (len(self.bin2) == len(self.bin2)):
            maxLen = len(self.bin1)+1
        else:
            maxLen = max(len(self.bin1),len(self.bin2))

        print(maxLen)



x = binClass(1,1)
x.addBin()
