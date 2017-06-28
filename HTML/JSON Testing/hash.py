import argparse


parser = argparse.ArgumentParser(description='Example with non-optional arguments')

parser.add_argument('-s', action='store', dest='simple_value',
                    help='Store a simple value')

result = parser.parse_args()
word = result.simple_value

print(word)
