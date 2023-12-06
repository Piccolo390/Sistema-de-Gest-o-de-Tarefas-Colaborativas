const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        // Enviar resposta ao cliente
    } catch (error) {
        // Lidar com erros
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};  