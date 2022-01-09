const awilix = require('awilix')

// Aplication
import { application } from '.';

//Domain
import BlockchainBusines from '../domain/business/BlockchainBusiness'
import BlockchainService from '../domain/service/BlockchainService'

// Create the container and set the injectionMode to PROXY.
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})




//============================================================================
//                                APPLICATION
//============================================================================

// Business
container.register({
    application: asFunction(application)
});



//============================================================================

//============================================================================
//                                DOMAIN
//============================================================================

// Business
container.register({
    blockChainBusiness: awilix.asClass(BlockchainBusines).scoped().singleton(),
    businessValidations: awilix.asClass(BusinessValidation).scoped().singleton()
})

// Service
container.register({
    blockChainService: awilix.asClass(BlockchainService).scoped().singleton()
})

//============================================================================