

export class RestHandsUpReqBody {
    public handsState?: number;
    public constructor(handsState?: number) { 
        this['handsState'] = handsState;
    }
    public withHandsState(handsState: number): RestHandsUpReqBody {
        this['handsState'] = handsState;
        return this;
    }
}