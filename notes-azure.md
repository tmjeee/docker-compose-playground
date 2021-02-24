# Azure 

[Azure CLI References](https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest)

Following are some commonly used:

## Login

```bash
az login --username <username> --password <password>

```

## Group / Resource Group

### Create Resource Groups

```bash
az group create --name <resource group name> --location <location eg. australiaeast>
```

### Wait for Resource Group to be ready

```bash
az group wait --name <resource group name>
```


## AVM (Azure Virtual Machine)

### Alter port

```bash
az vm open-port --resource-group <resource group name> --name <virtual machine name> --port <port number>
```

## AKS (Azure Kunernetes Service)

### Install Kubectl from AZ

```bash
az aks install-cli 
```

### Create AKS (Azure Kubernetes Service) cluster

```bash
az aks create \
    --resource-group <resource group name>
    --name <cluster name>
    --node-count <node count eg. 2>
    --enable-addons <addons eg. http_application_routing> \
    --enable-managed-identity \
    --generate-ssh-keys \
    --node-vm-size Standard_B2s 
```

### Get kubernetes credentials

Get credentials and store it in ~/.kube/config

```bash
az aks get-credentials --name <cluster name> --resource-group <resource group>
```

### Azure kubernetes info 

```bash
az aks show -g $RESOURCE_GROUP -n $CLUSTER_NAME -o json
az aks show -g $RESOURCE_GROUP -n $CLUSTER_NAME -o tsv --query addonProfiles.httpApplicationRouting.config.HTTPApplicationRoutingZoneName
```




