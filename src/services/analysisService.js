class AnalysisService {

    static getCurrentScenario() {
      const CURRENT_SCENARIO = {
        equity: 'R$521.230,02',
        profitability: '2,34%',
        date: '30MAI2018',
      };
  
      const response = {
        ok: true,
        data: CURRENT_SCENARIO,
        error: undefined,
      };
  
      return response;
    };
  
    static getProjection() {
      const PROJECTION = {
        date: '30MAI2020',
        expected: {
          equity: 'R$521.230,02',
          profitability: '2,34%',
        },
        optimist: {
          equity: 'R$601.771,90',
          profitability: '145,93%',
        },
        pessimist: {
          equity: 'R$409.100,32',
          profitability: '92,02%',
        },
      };
  
      const response = {
        ok: true,
        data: PROJECTION,
        error: undefined,
      };
  
      return response;
    };
  }
  
  export default AnalysisService;