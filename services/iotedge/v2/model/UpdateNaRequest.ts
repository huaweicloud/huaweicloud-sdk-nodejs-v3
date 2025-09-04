import { UpdateNaRequestDTO } from './UpdateNaRequestDTO';


export class UpdateNaRequest {
    private 'na_id'?: string;
    public body?: UpdateNaRequestDTO;
    public constructor(naId?: string) { 
        this['na_id'] = naId;
    }
    public withNaId(naId: string): UpdateNaRequest {
        this['na_id'] = naId;
        return this;
    }
    public set naId(naId: string  | undefined) {
        this['na_id'] = naId;
    }
    public get naId(): string | undefined {
        return this['na_id'];
    }
    public withBody(body: UpdateNaRequestDTO): UpdateNaRequest {
        this['body'] = body;
        return this;
    }
}