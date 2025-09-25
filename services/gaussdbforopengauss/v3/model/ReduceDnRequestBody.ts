

export class ReduceDnRequestBody {
    private 'contraction_num'?: number;
    public constructor(contractionNum?: number) { 
        this['contraction_num'] = contractionNum;
    }
    public withContractionNum(contractionNum: number): ReduceDnRequestBody {
        this['contraction_num'] = contractionNum;
        return this;
    }
    public set contractionNum(contractionNum: number  | undefined) {
        this['contraction_num'] = contractionNum;
    }
    public get contractionNum(): number | undefined {
        return this['contraction_num'];
    }
}