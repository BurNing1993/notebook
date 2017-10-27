package main

import(
	"log"
	"net/http"
)

func main(){
	
	mux:=http.NewServeMux()
	mux.Handle("/",&myHandler{})
	mux.HandleFunc("/bye",sayBye)

	log.Println("Start Server")
	log.Fatal(http.ListenAndServe(":5000",mux))

}

type myHandler struct{}

func (_ *myHandler) ServeHTTP(w http.ResponseWriter,r *http.Request)  {
	w.Write([]byte("Hello http Server v2,the request URL is"+r.URL.String()))
}

func sayBye(w http.ResponseWriter,r *http.Request){
	w.Write([]byte("Bye-Bye!"))
}
