// Required parameter.

function tsxReqFuncStatement1(p: any): void { console.log(p) };

function tsxReqFuncStatement2(...p: any[]): void { console.log(p) };

function tsxReqFuncStatement3({ p }: { p: any }): void { console.log(p) };

function tsxReqFuncStatement4({ a: p }: { a: any }): void { console.log(p) };

function tsxReqFuncStatement5([ p ]: any[]): void { console.log(p) };

function tsxReqFuncStatement6(p: any = 1): void { console.log(p) };

const tsxReqFuncExpression1 = (p: any): void => { console.log(p) };

const tsxReqFuncExpression2 = (...p: any[]): void => { console.log(p) };

const tsxReqFuncExpression3 = ({ p }: { p: any }): void => { console.log(p) };

const tsxReqFuncExpression4 = ({ a: p }: { a: any }): void => { console.log(p) };

const tsxReqFuncExpression5 = ([ p ]: any[]): void => { console.log(p) };

const tsxReqFuncExpression6 = (p: any = 1): void => { console.log(p) };

// Optional parameter.

function tsxOptFuncStatement1(p?: any): void { console.log(p) };

function tsxOptFuncStatement2(...p?: any[]): void { console.log(p) }; // Invalid but still posible to hihglight.

function tsxOptFuncStatement3({ p }: { p?: any }): void { console.log(p) };

function tsxOptFuncStatement4({ a: p }: { a?: any }): void { console.log(p) };

function tsxOptFuncStatement5([ p ]?: any[]): void { console.log(p) }; // Invalid but still posible to hihglight.

function tsxOptFuncStatement6(p?: any = 1): void { console.log(p) }; // Invalid but still posible to hihglight.

const tsxOptFuncExpression1 = (p?: any): void => { console.log(p) };

const tsxOptFuncExpression2 = (...p?: any[]): void => { console.log(p) }; // Invalid but still posible to hihglight.

const tsxOptFuncExpression3 = ({ p }: { p?: any }): void => { console.log(p) };

const tsxOptFuncExpression4 = ({ a: p }: { a?: any }): void => { console.log(p) };

const tsxOptFuncExpression5 = ([ p ]?: any[]): void => { console.log(p) }; // Invalid but still posible to hihglight.

const tsxOptFuncExpression6 = (p?: any = 1): void => { console.log(p) }; // Invalid but still posible to hihglight.

// No parenthesis single parameter.

const funcExpression7 = p => { console.log(p) }; // Imposible to assing type.
