

export class AlgorithmDetailDTO {
    public start?: number;
    public end?: number;
    private 'int_target'?: number;
    private 'string_target'?: string;
    public constructor() { 
    }
    public withStart(start: number): AlgorithmDetailDTO {
        this['start'] = start;
        return this;
    }
    public withEnd(end: number): AlgorithmDetailDTO {
        this['end'] = end;
        return this;
    }
    public withIntTarget(intTarget: number): AlgorithmDetailDTO {
        this['int_target'] = intTarget;
        return this;
    }
    public set intTarget(intTarget: number  | undefined) {
        this['int_target'] = intTarget;
    }
    public get intTarget(): number | undefined {
        return this['int_target'];
    }
    public withStringTarget(stringTarget: string): AlgorithmDetailDTO {
        this['string_target'] = stringTarget;
        return this;
    }
    public set stringTarget(stringTarget: string  | undefined) {
        this['string_target'] = stringTarget;
    }
    public get stringTarget(): string | undefined {
        return this['string_target'];
    }
}