# Compressão de imagens no Nodejs com Multer e Sharp
>> Este projeto demonstra como fazer upload e compressão de imagens em uma aplicação Node.j utilizando as bibliotecas Multer e Sharp.

## Tecnologias utilizadas

* Node.js
* Express (opcional)
* Multer
* Sharp

## Estrutura do projeto
```
project/
├── app.js (ou arquivo principal da sua aplicação)
├── multerConfig.js (opcional, configurações do Multer)
└── public/
    └── images/ (pasta para armazenar imagens enviadas)
```

## Funcionalidades

* Upload de imagens via requisição HTTP POST
* Validação de tipo de arquivo (somente PNG e JPEG)
* Limite de tamanho de arquivo (2MB por padrão)
* Redimensionamento da imagem (300x300 por padrão)
* Compressão da imagem em JPEG com qualidade 30%
* Salvamento da imagem compactada na pasta public/images

## Como executar

Instale as dependências:

```
    npm install multer sharp
```
    Use o código com cuidado.

## Opcional
Customize as configurações de upload em multerConfig.js.

Inicie o servidor Node.js com o seu arquivo principal (por exemplo, app.js).

## Observações

* Este projeto é um ponto de partida e pode ser adaptado para atender às suas necessidades específicas.
* Você pode integrar o upload de imagens com um banco de dados para persistir os nomes dos arquivos.
* As configurações de redimensionamento e compressão podem ser alteradas de acordo com seus requisitos.

## Licença

MIT

## Contato
Prof. Ms. Ricardo Leme - ricardo.leme@fatec.sp.gov.br 