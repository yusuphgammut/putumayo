function jsFuncStatement1(p) { console.log(p) };

function jsFuncStatement2(...p) { console.log(p) };

function jsFuncStatement3({ p }) { console.log(p) };

function jsFuncStatement4({ a: p }) { console.log(p) };

function jsFuncStatement5([ p ]) { console.log(p) };

function jsFuncStatement6(p = 1) { console.log(p) };

const jsFuncExpression1 = (p) => { console.log(p) };

const jsFuncExpression2 = (...p) => { console.log(p) };

const jsFuncExpression3 = ({ p }) => { console.log(p) };

const jsFuncExpression4 = ({ a: p }) => { console.log(p) };

const jsFuncExpression5 = ([ p ]) => { console.log(p) };

const jsFuncExpression6 = (p = 1) => { console.log(p) };

const jsFuncExpression7 = p => { console.log(p) };
