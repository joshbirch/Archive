import sys
import time

def load(loops):

    syms = ["-","\\","|","/"]
    for i in range(1,loops):
        for i in syms:
            sys.stdout.write(i+"\b")
            sys.stdout.flush()
            time.sleep(0.1)
def main():
    while 1 == 1:
        load(5)

if __name__ == "__main__":
    main()
