# Kubernetes

## Change context

* `Cluster` is where Kubernetes API Endpoint
* `User` is the user having access
* `Context` is a combination of `User` and `Cluster`

## list contexts

```bash
kubectl config get-contexts
```

## list current context

```bash
kubectl config current-context
```

## switch context

```bash
kubectl config use-context <context name>
```

## delete context

```bash
kubectl config delete-context <context name>

```
