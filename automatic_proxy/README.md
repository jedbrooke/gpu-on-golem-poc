# Warning: Automatic proxy is working but parts of the functionality is returning errors (interrogate image). These errors are probably to fix, but it needs more time to debug and test the rest of functionality.

# Automatic1111 proxy on Golem
Lets you use run stable diffusion webui from Automatic1111 on Golem provider via LocalProxy.

## Provider
### Build
- You need to first build `maugnorbert/docker_golem_cuda_base` image to be able to build stable diffusion provider image.
- You need to download stable-diffusion model files (`stable-diffusion-v1-5`).
- You need to have openai directory and clip-vit-large-patch14 repository inside 

## Requestor
Create venv based on api/requirements.txt

Then from venv:
```
cd ..
python -m automatic_proxy.requestor.service
```
