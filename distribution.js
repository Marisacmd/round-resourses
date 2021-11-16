const resourses = [{
        resourseUnit: 'wood',
        amount: 100
    },
    {
        resourseUnit: 'sand',
        amount: 300
    },
    {
        resourseUnit: 'silk',
        amount: 200
    },
];

const placeUnitsMax = 120;

const getResoursesCount = (resourses, placeUnits) => {

    const villageResoursesAmountTotal = resourses.reduce((sum, resourseUnit) => {
        return sum + resourseUnit.amount;
    }, 0);

    const _resourses = resourses.map(resourseUnit => {
        return Object.assign({}, resourseUnit, {
            rawPlaceUnits: placeUnits * resourseUnit.amount / villageResoursesAmountTotal,
            roundedplaceUnits: Math.floor(placeUnits * resourseUnit.amount / villageResoursesAmountTotal),
            placeUnits: Math.floor(placeUnits * resourseUnit.amount / villageResoursesAmountTotal)
        });
    }).sort((a, b) => b.rawPlaceUnits % 1 - a.rawPlaceUnits % 1);

    const totalRoundedplaceUnits = _resourses.reduce((sum, resourseUnit) => {
        return sum + resourseUnit.roundedplaceUnits;
    }, 0);

    const remainingPlaceUnits = placeUnits - totalRoundedplaceUnits;

    for (let i = 0; i < remainingPlaceUnits; i++) {
        _resourses[i].placeUnits += 1;
    }

    return _resourses;
};

console.log(getResoursesCount(resourses, placeUnitsMax));
