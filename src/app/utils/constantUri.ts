const baseUrl = 'https://api.themoviedb.org/3'

export class ConstantUri{
  public static readonly apikey ='4ad37ec53e5b5f9ae4c5775fe3c3fa9d';
  public static readonly validateWithLogin=baseUrl+'/authentication/token/validate_with_login';
  public static readonly tokenNew=baseUrl+'/authentication/token/new';

}
