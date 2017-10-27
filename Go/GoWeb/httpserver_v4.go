package main

import(
	"log"
	"net/http"
	"time"
	"os"
	"os/signal"
)

func main(){
	server:=&http.Server{
		Addr:    ":4000",
		WriteTimeout:2*time.Second,
	}

	quit:=make(chan os.Signal)
	signal.Notify(quit,os.Interrupt)

	mux:=http.NewServeMux()
	mux.Handle("/",&myHandler{})
	mux.HandleFunc("/bye",sayBye)
	server.Handler=mux

	go func(){
		<-quit

		if err:=server.Close();err!=nil {
			log.Fatal("Close server:",err)
		}
	}()

	log.Println("Start Server")
	
	if err:=server.ListenAndServe();err!=nil {
		if err==http.ErrServerClosed {
			log.Println("Server closed under request")
		}else{
			log.Println("Server closed under  unexpected")
		}
	}
	log.Println("Server exit")
	log.Fatal(server.ListenAndServe())

}

type myHandler struct{}

func (_ *myHandler) ServeHTTP(w http.ResponseWriter,r *http.Request)  {
	w.Write([]byte("Hello http Server v2,the request URL is"+r.URL.String()))
}

func sayBye(w http.ResponseWriter,r *http.Request){
	w.Write([]byte("Bye-Bye!"))
}


