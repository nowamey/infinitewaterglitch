from pyspark.sql import SparkSession



import os
spark_home = os.environ.get('SPARK_HOME') #none - in error , so because i dont have the python version defined in PYSPARK_PYTHON, this wont work???
spark_home = os.environ.get('SPARK_HOME') #PYSPARK_PYTHON
spark_home = os.environ.get('JAVA_HOME') # this is because i literally didnt have it oops



print(spark_home)
spark = SparkSession.builder.getOrCreate()