

function registrarRequerente() {
  event.preventDefault();
  if ($("#_enderecoRequerente").val().length != 42) {
    $("#_enderecoRequerente").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_enderecoRequerente").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_enderecoRequerente").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .registrarRequerente($("#_enderecoRequerente").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("registrarRequerente - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("registrarRequerente - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
      .catch((err) => {
        console.error("registrarRequerente - tx só foi enviada");
        console.error(err);
        $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}
  

function retirarRequerente() {
  event.preventDefault();
  if ($("#_enderecoRequerente").val().length != 42) {
    $("#_enderecoRequerente").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_enderecoRequerente").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_enderecoRequerente").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .retirarRequerente($("#_enderecoRequerente").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("retirarRequerente - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("retirarRequerente - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
      .catch((err) => {
        console.error("retirarRequerente - tx só foi enviada");
        console.error(err);
        $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}



function registrarRequerida() {
  event.preventDefault();
  if ($("#_enderecoRequerida").val().length != 42) {
    $("#_enderecoRequerida").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_enderecoRequerida").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_enderecoRequerida").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .registrarRequerida($("#_enderecoRequerida").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("registrarRequerida - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("registrarRequerida - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
      .catch((err) => {
        console.error("registrarRequerida - tx só foi enviada");
        console.error(err);
        $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}
  

function retirarRequerida() {
  event.preventDefault();
  if ($("#_enderecoRequerida").val().length != 42) {
    $("#_enderecoRequerida").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_enderecoRequerida").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_enderecoRequerida").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .retirarRequerida($("#_enderecoRequerida").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("retirarRequerida - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("retirarRequerida - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
      .catch((err) => {
        console.error("retirarRequerida - tx só foi enviada");
        console.error(err);
        $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function designarCoArbitro() {
  event.preventDefault();
  if ($("#_coarbitroIndicado").val().length != 42) {
    $("#_coarbitroIndicado").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_coarbitroIndicado").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_coarbitroIndicado").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .designarCoArbitro($("#_coarbitroIndicado").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("designarCoArbitro - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("designarCoArbitro - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
      .catch((err) => {
        console.error("designarCoArbitro - tx só foi enviada");
        console.error(err);
        $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function designarArbitroPresidente() {
  event.preventDefault();
  if ($("#_arbitroPresidenteIndicado").val().length != 42) {
    $("#_arbitroPresidenteIndicado").focus();
    alert("Endereço inválido");
    return;
  }
  if (!$("#_arbitroPresidenteIndicado").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_arbitroPresidenteIndicado").focus();
    return;
  }
  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .designarArbitroPresidente($("#_arbitroPresidenteIndicado").val())
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("designarArbitroPresidente - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("designarArbitroPresidente - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
      .catch((err) => {
        console.error("designarArbitroPresidente - tx só foi enviada");
        console.error(err);
        $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function assinarSentencaCoArbitro(opcao) {
  $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
  $("#statusTransacoes").show();
  contratoComSignatario
    .assinarSentencaCoArbitro(opcao)
    .then((transacao) => {
      transacao
        .wait()
        .then((resultado) => {
          console.log("assinarSentencaArbitroPresidente - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Assinatura computada. Obrigado.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro no voto: " + resultado);
          }
        })
        .catch((err) => {
          console.error("enviaVoto - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("enviaVoto - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

function assinarSentencaArbitroPresidente(opcao) {
  $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
  $("#statusTransacoes").show();
  contratoComSignatario
    .assinarSentencaArbitroPresidente(opcao)
    .then((transacao) => {
      transacao
        .wait()
        .then((resultado) => {
          console.log("assinarSentencaArbitroPresidente - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Assinatura computada. Obrigado.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro no voto: " + resultado);
          }
        })
        .catch((err) => {
          console.error("enviaVoto - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("enviaVoto - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}


//rascunho
  
function enviaVoto(_opcaoDesejada) {
  $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
  $("#statusTransacoes").show();
  contratoComSignatario
    .votar(_opcaoDesejada)
    .then((transacao) => {
      transacao
        .wait()
        .then((resultado) => {
          console.log("enviaVoto - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Voto computado. Obrigado.");
            $("#btnOpcao1").prop("disabled", true);
            $("#btnOpcao2").prop("disabled", true);
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro no voto: " + resultado);
          }
        })
        .catch((err) => {
          console.error("enviaVoto - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("enviaVoto - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}

  

function salvarRegistro() {
  event.preventDefault();
  if ($("#_endereco").val().length != 42) {
    $("#_endereco").focus();
    alert("Endereço inválido");
    return;
  }

  if (!$("#_endereco").val().startsWith("0x")) {
    alert("Endereço inválido");
    $("#_endereco").focus();
    return;
  }

  if ($("#_nomeProprietario").val().length < 5) {
    alert("Nome do proprietário inválido");
    $("#_nomeProprietario").focus();
    return;
  }

  var valorVenal = $("#_valorVenal").val() * 1;
  if (valorVenal < 10000) {
    alert("Valor venal inválido");
    $("#_valorVenal").focus();
    return;
  }

  if (typeof contratoComSignatario === "undefined") {
    alert("Você não está conectado ao Ethereum. Verifique seu Metamask");
    return;
  }

  contratoComSignatario
    .registraImovel($("#_endereco").val(), $("#_nomeProprietario").val(), $("#_valorVenal").val() * 1)
    .then((transacao) => {
      $("#descricaoStatusTransacoes").html("Transação enviada. Aguarde pela mineração...");
      $("#statusTransacoes").toggle();
      transacao
        .wait()
        .then((resultado) => {
          console.log("registraImovel - o resultado foi ", resultado);
          if (resultado.status === 1) {
            $("#descricaoStatusTransacoes").html("Transação executada.");
          } else {
            $("#descricaoStatusTransacoes").html("Houve um erro na execução da transação no Ethereum.");
          }
        })
        .catch((err) => {
          console.error("registraImovel - a transação foi minerada e houve um erro. Veja abaixo");
          console.error(err);
          $("#descricaoStatusTransacoes").html("Algo saiu errado: " + err.message);
        });
    })
    .catch((err) => {
      console.error("registraImovel - tx só foi enviada");
      console.error(err);
      $("#descricaoStatusTransacoes").html("Algo saiu errado antes de enviar ao Ethereum: " + err.message);
    });
}