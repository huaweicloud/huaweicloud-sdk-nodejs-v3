import { QueryCorpVcResResultDTO } from './QueryCorpVcResResultDTO';


export class QueryCorpResResultDTO {
    public corpVcRes?: QueryCorpVcResResultDTO;
    public constructor() { 
    }
    public withCorpVcRes(corpVcRes: QueryCorpVcResResultDTO): QueryCorpResResultDTO {
        this['corpVcRes'] = corpVcRes;
        return this;
    }
}