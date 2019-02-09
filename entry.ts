import soap from 'browser-soap';

const url = "http://localhost:1212/hello?wsdl";

type Client = {
  hello: (args: {"arg0": string}, callback: (err: any, result: {"return": string}) => void) => void,
};

soap.createClient(url, function (err, client: Client) {
  console.log('err:', err);
  console.log('client.keys:', Object.keys(client));

  client.hello({"arg0": "soap"}, (err, result) => {
    console.log('err:', err);
    console.log('result:', result);
  })
});
