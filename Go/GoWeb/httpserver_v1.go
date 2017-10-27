package main

import (
	"log"
	"net/http"
)
// use HandleFunc
func main()  {
	http.HandleFunc("/",func(w http.ResponseWriter,r *http.Request){
		w.Write([]byte("Hello http"))
	})
	http.HandleFunc("/bye",sayBye)
	
	log.Println("Start Server")
	log.Fatal(http.ListenAndServe(":4000",nil))
}

func sayBye(w http.ResponseWriter,r *http.Request)  {
		w.Write([]byte("Bye-Bye!"))
}
