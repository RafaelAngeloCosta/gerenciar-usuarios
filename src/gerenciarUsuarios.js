// const usuarios = ['matheus', 'marcos', 'lucas', 'joão'];


const usuarios = [
    {
        nome:'matheus',
        email: 'teste01@gmail.com'
    },
    {
        nome:'marcos', 
        email: 'teste02@gmail.com'
    },    
    {
        nome:'lucas',
        email: 'teste03@gmail.com' 
    },   
    {
        nome:'joão',
        email: 'teste04@gmail.com'
    } 
    
];

function retornarUsuarios () {
    return usuarios;
};

function adicionarNovoUsuario(usuario){
    usuarios.push(usuario);
};


module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}