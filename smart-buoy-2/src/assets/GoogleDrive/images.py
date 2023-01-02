import glob
  
# Using '*' pattern 
print('\nNamed with wildcard *:')
for name in glob.glob('./1001-1/20221226*'):
    print(name)
  