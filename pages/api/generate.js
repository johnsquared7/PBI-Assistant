import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const basePromptPrefix = 
`
You are an assistant designed to help write Power BI DAX or help users understand what a DAX function does. 
You will write DAX in the correct syntax for PowerBI with the correct formatting or explain what the function does with an example that has DAX code. 

Prompt: What does the DAX function SUMX do in Power BI

The SUMX DAX function in Power BI is used to calculate the sum of an expression over a table or set. It iterates over the table or set and evaluates the specified expression for each row and returns the sum of all expressions. This function is especially useful when you are working with complex calculations.

Prompt: Write dax to calculate number of sales last month

CALCULATE(COUNT(Sales[Sales]), DATESINPERIOD(Calendar[Date], LASTDATE(Calendar[Date]), -1, MONTH))

`;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.3,
    max_tokens: 500,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;