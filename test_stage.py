# -*- coding: utf-8 -*-
"""
Created on Tue Jun 11 22:53:12 2019

@author: Matthieu
"""
import tkinter
import tkinter.ttk as ttk
from tkinter import *

#Création de la fenêtre
window = Tk()
window.geometry("1000x500")
window.title("Welcome to my world")

#Création d'une sous-fenêtre
f1 = tkinter.Frame()


#Bouton
bouton = tkinter.Button(f1, text = 'test')
bouton.pack()
#bouton.place(x=200,y=5)

#Zone de saisie
saisie = tkinter.Entry(f1)
saisie.pack()
#saisie.place(x=200,y=50)

message = ['SOAP','REST','BUFFERUDP']
#Case à cocher
for i in range(len(message)):
    v = tkinter.IntVar()
    case = tkinter.Checkbutton(f1, variable = v)
    case.config(text=message[i])
    #case.place(x=200,y=100)
    case.pack()

#Radio Button
v = tkinter.IntVar ()
case1 = tkinter.Radiobutton (f1, variable = v, value = 10)
case1.config(text='bouton 1')
case2 = tkinter.Radiobutton (f1, variable = v, value = 20)
case2.config(text='bouton 2')
case3 = tkinter.Radiobutton (f1, variable = v, value = 30)
case3.config(text='bouton 3')


case1.pack()
case2.pack()
case3.pack()
#case1.place(x=200,y=150)
#case2.place(x=200,y=200)
#case3.place(x=200,y=250)


#♀Combobox
o = ttk.Combobox(f1, values=['SOAP','REST','BUFFERUDP'])
#o.place(x=200,y=300)
o.pack()

b = tkinter.Button (f1, text="print")
#b.config (command = print_file)         # idem
#b.place(x=200,y=350)
b.pack()

#Affichage de la sous-fenêtre
f1.place(x=250,y=50)

def test():
    global bouton
    bouton.config(text = 'nouvelle légende')

#Création d'une sous-fenêtre
f2 = tkinter.Frame()
l = tkinter.Label(f2, text = "mon test")
l.pack()  

s = tkinter.Entry(f2)
s.pack()
f2.pack(side = tkinter.LEFT)

#Lancement de la fenêtre
bouton.config(command = test)
window.mainloop()



bonjour1