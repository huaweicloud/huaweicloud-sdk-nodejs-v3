import { BlockPage } from './BlockPage';
import { PremiumWafServer } from './PremiumWafServer';


export class CreatePremiumHostRequestBody {
    public certificateid?: string;
    public certificatename?: string;
    public hostname: string;
    public proxy: boolean;
    public policyid?: string;
    public server: Array<PremiumWafServer>;
    private 'block_page'?: BlockPage | undefined;
    public description?: string;
    public constructor(hostname?: any, proxy?: any, server?: any) { 
        this['hostname'] = hostname;
        this['proxy'] = proxy;
        this['server'] = server;
    }
    public withCertificateid(certificateid: string): CreatePremiumHostRequestBody {
        this['certificateid'] = certificateid;
        return this;
    }
    public withCertificatename(certificatename: string): CreatePremiumHostRequestBody {
        this['certificatename'] = certificatename;
        return this;
    }
    public withHostname(hostname: string): CreatePremiumHostRequestBody {
        this['hostname'] = hostname;
        return this;
    }
    public withProxy(proxy: boolean): CreatePremiumHostRequestBody {
        this['proxy'] = proxy;
        return this;
    }
    public withPolicyid(policyid: string): CreatePremiumHostRequestBody {
        this['policyid'] = policyid;
        return this;
    }
    public withServer(server: Array<PremiumWafServer>): CreatePremiumHostRequestBody {
        this['server'] = server;
        return this;
    }
    public withBlockPage(blockPage: BlockPage): CreatePremiumHostRequestBody {
        this['block_page'] = blockPage;
        return this;
    }
    public set blockPage(blockPage: BlockPage | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage() {
        return this['block_page'];
    }
    public withDescription(description: string): CreatePremiumHostRequestBody {
        this['description'] = description;
        return this;
    }
}