FROM node

EXPOSE 5000

# install .NET Core SDK
RUN apt-get update
RUN apt-get -y install curl libunwind8 gettext
RUN curl -sSL -o dotnet.tar.gz https://go.microsoft.com/fwlink/?linkid=848826
RUN mkdir -p /opt/dotnet && tar zxf dotnet.tar.gz -C /opt/dotnet
RUN ln -s /opt/dotnet/dotnet /usr/local/bin

# copy project contents into image
RUN mkdir titles
COPY . titles/
RUN cd titles
WORKDIR titles

# build the app
RUN npm install
RUN dotnet restore
RUN npm install -g webpack
RUN webpack --config webpack.config.vendor.js
RUN webpack
RUN dotnet run