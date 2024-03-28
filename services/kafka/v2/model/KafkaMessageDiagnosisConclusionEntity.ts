

export class KafkaMessageDiagnosisConclusionEntity {
    public id?: number;
    public params?: { [key: string]: string; };
    public constructor(id?: number) { 
        this['id'] = id;
    }
    public withId(id: number): KafkaMessageDiagnosisConclusionEntity {
        this['id'] = id;
        return this;
    }
    public withParams(params: { [key: string]: string; }): KafkaMessageDiagnosisConclusionEntity {
        this['params'] = params;
        return this;
    }
}