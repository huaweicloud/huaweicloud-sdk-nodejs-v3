import { ManagerDto } from './ManagerDto';


export class EnterpriseDto {
    public costCenter?: string;
    public department?: string;
    public division?: string;
    public employeeNumber?: string;
    public manager?: ManagerDto;
    public organization?: string;
    public constructor() { 
    }
    public withCostCenter(costCenter: string): EnterpriseDto {
        this['costCenter'] = costCenter;
        return this;
    }
    public withDepartment(department: string): EnterpriseDto {
        this['department'] = department;
        return this;
    }
    public withDivision(division: string): EnterpriseDto {
        this['division'] = division;
        return this;
    }
    public withEmployeeNumber(employeeNumber: string): EnterpriseDto {
        this['employeeNumber'] = employeeNumber;
        return this;
    }
    public withManager(manager: ManagerDto): EnterpriseDto {
        this['manager'] = manager;
        return this;
    }
    public withOrganization(organization: string): EnterpriseDto {
        this['organization'] = organization;
        return this;
    }
}