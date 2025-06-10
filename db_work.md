
### This is for taking dump

```
mongoexport --db=myappdb --collection=tasks --username=ankit --password=ankit --authenticationDatabase=admin --out=/data/dump/tasks_d.json

```

### This is for restore the db into mongo db
```
mongoimport --db=myappdb --collection=tasks --file=/data/tasks.json --username=ankit --password=ankit --authenticationDatabase=admin --jsonArray
```
