@echo off

@REM set PYTHON=
set PYTHON="F:\Anaconda3\envs\StableDiffusion\python.exe"
set GIT=
set VENV_DIR=
set COMMANDLINE_ARGS=--xformers --medvram  --no-half-vae --api
@REM  --gradio-img2img-tool color-sketch
@REM 一些COMMANDLINE_ARGS参数（https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Command-Line-Arguments-and-Settings）
@REM --share 允许公网访问
@REM --xformers 提高绘制速度
@REM --medvram 或 -lowvram 如out of memory则可添加上述配置，降低显存要求
@REM --api 允许接口调用，通过/docs访问swagger文档
call webui.bat