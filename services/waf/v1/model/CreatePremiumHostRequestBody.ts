import { BlockPage } from './BlockPage';
import { PremiumWafServer } from './PremiumWafServer';


export class CreatePremiumHostRequestBody {
    public certificateid?: string;
    public certificatename?: string;
    public hostname?: string;
    public proxy?: boolean;
    public policyid?: string;
    public server?: Array<PremiumWafServer>;
    private 'block_page'?: BlockPage;
    private 'forward_header_map'?: { [key: string]: string; };
    public description?: string;
    public constructor(hostname?: string, proxy?: boolean, server?: Array<PremiumWafServer>) { 
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
    public set blockPage(blockPage: BlockPage  | undefined) {
        this['block_page'] = blockPage;
    }
    public get blockPage(): BlockPage | undefined {
        return this['block_page'];
    }
    public withForwardHeaderMap(forwardHeaderMap: { [key: string]: string; }): CreatePremiumHostRequestBody {
        this['forward_header_map'] = forwardHeaderMap;
        return this;
    }
    public set forwardHeaderMap(forwardHeaderMap: { [key: string]: string; }  | undefined) {
        this['forward_header_map'] = forwardHeaderMap;
    }
    public get forwardHeaderMap(): { [key: string]: string; } | undefined {
        return this['forward_header_map'];
    }
    public withDescription(description: string): CreatePremiumHostRequestBody {
        this['description'] = description;
        return this;
    }
}