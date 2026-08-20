import { PageVO } from './PageVO';
import { ThirdPartyAssociatedDTO } from './ThirdPartyAssociatedDTO';


export class ThirdPartyAssociatedResultData {
    public result?: Array<ThirdPartyAssociatedDTO>;
    public page?: PageVO;
    public constructor() { 
    }
    public withResult(result: Array<ThirdPartyAssociatedDTO>): ThirdPartyAssociatedResultData {
        this['result'] = result;
        return this;
    }
    public withPage(page: PageVO): ThirdPartyAssociatedResultData {
        this['page'] = page;
        return this;
    }
}