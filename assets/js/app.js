const filterTemporada = (data2) => {
    const filteredTemporada = data2.filter(element2 => {
      return element2.seasonNum === 1
    })
    return filteredTemporada;
     };

     window.filterTemporada=filterTemporada;
