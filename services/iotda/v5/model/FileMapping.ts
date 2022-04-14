import { CsvMappings } from './CsvMappings';


export class FileMapping {
    private 'csv_mappings'?: Array<CsvMappings> | undefined;
    public constructor() { 
    }
    public withCsvMappings(csvMappings: Array<CsvMappings>): FileMapping {
        this['csv_mappings'] = csvMappings;
        return this;
    }
    public set csvMappings(csvMappings: Array<CsvMappings> | undefined) {
        this['csv_mappings'] = csvMappings;
    }
    public get csvMappings() {
        return this['csv_mappings'];
    }
}