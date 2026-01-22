import { IpsWhiteListDto } from './IpsWhiteListDto';


export class BatchCreateIpsWhiteListDto {
    private 'ips_white_list_dto_list'?: Array<IpsWhiteListDto>;
    public constructor(ipsWhiteListDtoList?: Array<IpsWhiteListDto>) { 
        this['ips_white_list_dto_list'] = ipsWhiteListDtoList;
    }
    public withIpsWhiteListDtoList(ipsWhiteListDtoList: Array<IpsWhiteListDto>): BatchCreateIpsWhiteListDto {
        this['ips_white_list_dto_list'] = ipsWhiteListDtoList;
        return this;
    }
    public set ipsWhiteListDtoList(ipsWhiteListDtoList: Array<IpsWhiteListDto>  | undefined) {
        this['ips_white_list_dto_list'] = ipsWhiteListDtoList;
    }
    public get ipsWhiteListDtoList(): Array<IpsWhiteListDto> | undefined {
        return this['ips_white_list_dto_list'];
    }
}