#!/bin/bash

docker image build --tag tmjee/be-sample --file ./be-sample/docker/dockerfile ./be-sample
docker image build --tag tmjee/fe-sample --file ./fe-sample/docker/dockerfile ./fe-sample