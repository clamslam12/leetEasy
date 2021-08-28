public class Solution {
    public IList<IList<int>> Generate(int numRows) {
        
        IList<IList<int>> triangle = new List<IList<int>>();
        IList<int> first = new List<int>(){1};
        triangle.Add(first);
        //rows of triangle
        for(int i = 1; i < numRows; i++){
            IList<int> newRow = new List<int>();
            newRow.Add(1);
            IList<int> prevRow = triangle[i-1];
            //elements inside each row
            for(int j =1; j<prevRow.Count;j++){
                newRow.Add(prevRow[j-1] + prevRow[j]);
            }
            
            newRow.Add(1);
            triangle.Add(newRow);
            
        }
        
        return triangle;
        
    }
}
