// Required parameter.

function tsReqFuncStatement1(p: any): void { console.log(p) };

function tsReqFuncStatement2(...p: any[]): void { console.log(p) };

function tsReqFuncStatement3({ p }: { p: any }): void { console.log(p) };

function tsReqFuncStatement4({ a: p }: { a: any }): void { console.log(p) };

function tsReqFuncStatement5([ p ]: any[]): void { console.log(p) };

function tsReqFuncStatement6(p: any = 1): void { console.log(p) };

const tsReqFuncExpression1 = (p: any): void => { console.log(p) };

const tsReqFuncExpression2 = (...p: any[]): void => { console.log(p) };

const tsReqFuncExpression3 = ({ p }: { p: any }): void => { console.log(p) };

const tsReqFuncExpression4 = ({ a: p }: { a: any }): void => { console.log(p) };

const tsReqFuncExpression5 = ([ p ]: any[]): void => { console.log(p) };

const tsReqFuncExpression6 = (p: any = 1): void => { console.log(p) };

// Optional parameter.

function tsOptFuncStatement1(p?: any): void { console.log(p) };

function tsOptFuncStatement2(...p?: any[]): void { console.log(p) }; // Invalid but still posible to hihglight.

function tsOptFuncStatement3({ p }: { p?: any }): void { console.log(p) };

function tsOptFuncStatement4({ a: p }: { a?: any }): void { console.log(p) };

function tsOptFuncStatement5([ p ]?: any[]): void { console.log(p) }; // Invalid but still posible to hihglight.

function tsOptFuncStatement6(p?: any = 1): void { console.log(p) }; // Invalid but still posible to hihglight.

const tsOptFuncExpression1 = (p?: any): void => { console.log(p) };

const tsOptFuncExpression2 = (...p?: any[]): void => { console.log(p) }; // Invalid but still posible to hihglight.

const tsOptFuncExpression3 = ({ p }: { p?: any }): void => { console.log(p) };

const tsOptFuncExpression4 = ({ a: p }: { a?: any }): void => { console.log(p) };

const tsOptFuncExpression5 = ([ p ]?: any[]): void => { console.log(p) }; // Invalid but still posible to hihglight.

const tsOptFuncExpression6 = (p?: any = 1): void => { console.log(p) }; // Invalid but still posible to hihglight.

// No parenthesis single parameter.

const funcExpression7 = p => { console.log(p) }; // Imposible to assing type.
