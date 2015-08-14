            var dataBanner = {
                items: [
                    {
                        divItem: "item active",
                        imagem: "images/banner/banner1.jpg",
                        legenda: "Letras 1"
                    },
                    {
                        divItem: "item",
                        imagem: "images/banner/banner2.jpg",
                        legenda: "Letras 2"
                    },
                    {
                        divItem: "item",
                        imagem: "images/banner/banner3.jpg",
                        legenda: "Letras 3"
                    }
                ]
            };
            var template = $.templates("#bannerTmpl");
            var htmlOutput = template.render(dataBanner);
            $("#banner").html(htmlOutput);

            var dataListaArtistas01 = {
                items: [
                    {
                        divCol: "col-lg-3",
                        divThumb: "thumbnail",
                        imagem: "images/chile.jpg",
                        divCap: "caption",
                        nome: "Chile",
                        descricao: "Javiera Mena, Gepe, Camila Moreno..."
                    },
                    {
                        divCol: "col-lg-3",
                        divThumb: "thumbnail",
                        imagem: "images/espanha.jpg",
                        divCap: "caption",
                        nome: "Espanha",
                        descricao: "Javiera Mena, Gepe, Camila Moreno..."
                    },
                    {
                        divCol: "col-lg-3",
                        divThumb: "thumbnail",
                        imagem: "images/franca.jpg",
                        divCap: "caption",
                        nome: "França",
                        descricao: "Javiera Mena, Gepe, Camila Moreno..."
                    },
                    {
                        divCol: "col-lg-3",
                        divThumb: "thumbnail",
                        imagem: "images/chile.jpg",
                        divCap: "caption",
                        nome: "Chile",
                        descricao: "Javiera Mena, Gepe, Camila Moreno..."
                    }
                ]
            };
            var template = $.templates("#listaArtistas01Tmpl");
            var htmlOutput = template.render(dataListaArtistas01);
            $("#listaArtistas01").html(htmlOutput);

            var dataListaArtistas02 = {
                items: [
                    {
                        divCol: "col-lg-3",
                        divThumb: "thumbnail",
                        imagem: "images/franca.jpg",
                        divCap: "caption",
                        nome: "França",
                        descricao: "Javiera Mena, Gepe, Camila Moreno..."
                    },
                    {
                        divCol: "col-lg-3",
                        divThumb: "thumbnail",
                        imagem: "images/uruguai.jpg",
                        divCap: "caption",
                        nome: "Uruguai",
                        descricao: "Javiera Mena, Gepe, Camila Moreno..."
                    },
                    {
                        divCol: "col-lg-3",
                        divThumb: "thumbnail",
                        imagem: "images/chile.jpg",
                        divCap: "caption",
                        nome: "Chile",
                        descricao: "Javiera Mena, Gepe, Camila Moreno..."
                    },
                    {
                        divCol: "col-lg-3",
                        divThumb: "thumbnail",
                        imagem: "images/espanha.jpg",
                        divCap: "caption",
                        nome: "Espanha",
                        descricao: "Javiera Mena, Gepe, Camila Moreno..."
                    }
                ]
            };
            var template = $.templates("#listaArtistas02Tmpl");
            var htmlOutput = template.render(dataListaArtistas02);
            $("#listaArtistas02").html(htmlOutput);

            var dataInscricao = {
                items: [
                    {
                        divCol: "col-lg-6",
                        divJumbo: "jumbotron",
                        titulo: "Faça parte da comunidade",
                        descricao: "JJunte-se a 23 mil pessoas que fazem o maior site de letras de músicas.",
                        tituloBotao: "Começar!"
                    }
                ]
            };
            var template = $.templates("#inscricaoUsuarioTmpl");
            var htmlOutput = template.render(dataInscricao);
            $("#inscricaoUsuario").html(htmlOutput);

            var dataListaUsuarios01 = {
                items: [
                    {
                        divCol: "col-lg-4",
                        divThumb: "thumbnail",
                        imagem: "images/avatar/ana_karolina.jpg",
                        formatoImg: "img-circle",
                        divCap: "caption",
                        nome: "Ana"
                    },
                    {
                        divCol: "col-lg-4",
                        divThumb: "thumbnail",
                        imagem: "images/avatar/cicero_verneck.jpg",
                        formatoImg: "img-circle",
                        divCap: "caption",
                        nome: "Cícero"
                    },
                    {
                        divCol: "col-lg-4",
                        divThumb: "thumbnail",
                        imagem: "images/avatar/gabriel_bueno.jpg",
                        formatoImg: "img-circle",
                        divCap: "caption",
                        nome: "Gabriel"
                    }
                ]
            };
            var template = $.templates("#listaUsuarios01Tmpl");
            var htmlOutput = template.render(dataListaUsuarios01);
            $("#listaUsuarios01").html(htmlOutput);

            var dataListaUsuarios02 = {
                items: [
                    {
                        divCol: "col-lg-4",
                        divThumb: "thumbnail",
                        imagem: "images/avatar/joao_de_paula.jpg",
                        formatoImg: "img-circle",
                        divCap: "caption",
                        nome: "João"
                    },
                    {
                        divCol: "col-lg-4",
                        divThumb: "thumbnail",
                        imagem: "images/avatar/noel_fernandes.jpg",
                        formatoImg: "img-circle",
                        divCap: "caption",
                        nome: "Noel"
                    },
                    {
                        divCol: "col-lg-4",
                        divThumb: "thumbnail",
                        imagem: "images/avatar/reginaldo_costa.jpg",
                        formatoImg: "img-circle",
                        divCap: "caption",
                        nome: "Reginaldo"
                    }
                ]
            };
            var template = $.templates("#listaUsuarios02Tmpl");
            var htmlOutput = template.render(dataListaUsuarios02);
            $("#listaUsuarios02").html(htmlOutput);


            var dataTituloPlayList = {
              "titulo": "DÊ O PLAY E FAÇA UMA VIAGEM MUSICAL"
            };
            var template = $.templates("#tituloPlayListTmpl");
            var htmlOutput = template.render(dataTituloPlayList);
            $("#tituloPlayList").html(htmlOutput);


            var dataTituloBotaoPlayList = {
              "tituloBotao": "Ver mais playlists"
            };
            var template = $.templates("#tituloBotaoPlayListTmpl");
            var htmlOutput = template.render(dataTituloBotaoPlayList);
            $("#tituloBotaoPlayList").html(htmlOutput);