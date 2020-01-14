const acceptanceProbability = (currentEnergy, newEnergy, temperature) => {
    if (newEnergy < currentEnergy) {
        return 1.0;
    }
    
    //currentEnergy < newEnergy

    return Math.exp( (currentEnergy - newEnergy) / temperature);
    //return Math.exp(-(newEnergy - currentEnergy) / temperature);
    //return 1 / (1 + Math.exp((newEnergy - currentEnergy) / temperature));
}

export default acceptanceProbability;