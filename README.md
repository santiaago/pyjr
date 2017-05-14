# pyjr
minimal python javascript react app

# install:

* Flask==0.10.1
* gunicorn==19.3.0

# run server:

```
~/pyjr> gunicorn server:app --log-file=- --log-level INFO
```

# build frontend:

```
~/pyjr/app> npm run build
```


