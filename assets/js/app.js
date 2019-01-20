const filterTemporada = (data2,condition) => {
    const filteredTemporada = data2.filter(element2 => {
      return element2.seasonNum == (condition)
    })
return filteredTemporada;
};

