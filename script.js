function generateQR()
        {
            let qrApi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
            let myimg=document.getElementById("img");
            let mytext=document.getElementById("qrtext").value;
            let mysize=document.getElementById("size").value;


            if (mytext!=="" && mysize=="100")
            {
                myimg.src=qrApi+"100x100"+"&chl="+mytext;
            }

            else if(mytext!=="" && mysize=="150")
            {

                myimg.src=qrApi+"150x150"+"&chl="+mytext;
            }

            else if(mytext!=="" && mysize=="200")
            {
                myimg.src=qrApi+"200x200"+"&chl="+mytext;
            }

            else if (mytext!=="" && mysize=="250")
            {
                myimg.src=qrApi+"250x250"+"&chl="+mytext;
            }

            else if (mytext!=="" && mysize=="300")
            {
                myimg.src=qrApi+"300x300"+"&chl="+mytext;
            }

            else
            {
                alert("Please Enter Text");
            }
        
        }