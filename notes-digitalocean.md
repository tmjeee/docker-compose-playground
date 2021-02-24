# Digital Ocean

## Login / Switch login
```
doctl auth init --accesstoken <access-token>
```
or
```
doctl auth init -t <access token>  
```

## Switch login
```
doctl auth switch
```

## Update kubernetes config
```
doctl kubernetest cluster kubeconfig save <cluster name>
```

## List SSL certificates 
Sometimes you need the certificate id, eg. when configuring loadbalancer service
```
doctl compute certificate list
```

