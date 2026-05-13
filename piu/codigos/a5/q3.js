let animalProto = {
    grupo: '',
    descrever: function () {
        console.log('Este(a) é um(a)', this.grupo)
    }
}

peba = Object.create(animalProto)
peba.grupo = 'mamífero'
arribaca = Object.create(animalProto)
arribaca.grupo = 'ave'

peba.descrever()
arribaca.descrever()