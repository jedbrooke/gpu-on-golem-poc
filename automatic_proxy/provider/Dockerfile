FROM maugnorbert/docker_golem_cuda_base:latest

WORKDIR /usr/src/app
VOLUME /usr/src/app/output

COPY run_service.sh ./
COPY proxy.conf /etc/nginx/conf.d/

RUN apt-get update && apt-get install -y python3-pip pciutils curl git net-tools nginx
RUN pip install --no-cache-dir --upgrade pip wheel setuptools setuptools_rust
RUN git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
RUN pip install --no-cache-dir -r stable-diffusion-webui/requirements.txt

COPY stable-diffusion-v1-5/v1-5-pruned-emaonly.ckpt ./stable-diffusion-webui/models/Stable-diffusion
COPY openai ./stable-diffusion-webui/openai

WORKDIR stable-diffusion-webui

# Disabling Gzipped responses from API
RUN sed -i '/app.add_middleware(GZipMiddleware, minimum_size=1000)/d' webui.py

# Run once and exit to download and setup dependencies
RUN python3 launch.py --skip-torch-cuda-test --exit
RUN python3 -c 'from modules.deepbooru import model; model.load()'
RUN python3 -c 'from modules.codeformer_model import setup_model; setup_model(None)'
RUN python3 -c 'from modules.gfpgan_model import gfpgann; gfpgann()'
RUN python3 -c 'from modules.shared import interrogator; interrogator.load()'
