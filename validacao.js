
function validarNome(nome){
  return nome.length > 15;
};

function validarIdade(idade){
    return idade >= 18;
}

module.exports = {
  validarNome,
  validarIdade
};
